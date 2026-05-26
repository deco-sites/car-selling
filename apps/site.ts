import website, { Props } from "apps/website/mod.ts";
import manifest, { Manifest } from "../manifest.gen.ts";
import { type App, type AppContext as AC } from "@deco/deco";
type WebsiteApp = ReturnType<typeof website>;
/**
 * @title Site
 * @description Start your site from a template or from scratch.
 * @category Tool
 * @logo https://decoims.com/car-selling/1c022300-2e54-4833-8ef6-240c946c4aea/beac117a6d4de446.png
 */
export default function Site(state: Props): App<Manifest, Props, [
    WebsiteApp
]> {
    return {
        state,
        manifest,
        dependencies: [
            website(state),
        ],
    };
}
export type SiteApp = ReturnType<typeof Site>;
export type AppContext = AC<SiteApp>;
export { onBeforeResolveProps, Preview } from "apps/website/mod.ts";
