import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import z from "zod"

const envSchema = z.object({
    VITE_APP_VERSION: z.string(),
    VITE_APP_GITHUB_LINK: z.string().url(),
    VITE_APP_RELEASES_LINK: z.string().url(),
})

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    return {
        plugins: [react()],
        resolve: {
            alias: {
                "@scss": path.resolve("src/shared/scss"),
                "@app": path.resolve("src/app"),
                "@pages": path.resolve("src/pages"),
                "@widgets": path.resolve("src/widgets"),
                "@entities": path.resolve("src/entities"),
                "@features": path.resolve("src/features"),
                "@shared": path.resolve("src/shared"),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @import "@scss/_mixins.scss";
                        @import "@scss/_media.scss";
                        @import "@scss/_scss-properties.scss";
                    `,
                },
            },
        },
    }
})
