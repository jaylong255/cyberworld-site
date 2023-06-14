import { defineConfig, HttpProxy, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { IncomingMessage, ServerResponse } from "http";

const env = loadEnv("development", process.cwd(), "");

const backends = {
  apim: {
    url: env.APIM_URL,
    rewrite: false
  },
  local: {
    url: env.LOCAL_URL,
    rewrite: true,
  },
  development: {
    url: env.DEVELOPMENT_URL,
    rewrite: true,
  }
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      fastRefresh: process.env.NODE_ENV !== "test",
      babel: {
        plugins: ["macros"],
      },
    }),
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test/setup.ts"],
    deps: {
      inline: ["vitest-canvas-mock"],
    },
    coverage: {
      reporter: ["cobertura", "text", "text-summary"],
    },
  },
  server: {
    proxy: {
      "/api": {
        target: backends[env.VITE_BACKEND]?.url,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => {
          if (backends[env.VITE_BACKEND]?.rewrite) {
            return path.replace(/^\/api/, "");
          } else {
            return path;
          }
        },
        configure: (proxy, options) => {
          proxy.on('error', (err, _req, _res) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('Sending Request to the Target:', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
          });
          proxy.on("proxyReq", function (proxyReq) {
            proxyReq.setHeader(
              "Ocp-Apim-Subscription-Key",
              env.APIM_KEY
            );
          });
          return (
            req: IncomingMessage,
            res: ServerResponse,
            next: HttpProxy.ErrorCallback
            ) => {
            proxy.web(
              req,
              res,
              {
                target: options.target,
              },
              next
            );
          };
        },
      },
    },
  },
});
