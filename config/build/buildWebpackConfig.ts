import webpack from "webpack"

import buildLoaders from "./buildLoaders";
import buildResolve from "./buildResolve";
import { buildPlugins } from "./buildPlugins";
import { BuildOptions } from "./types/config";

export default function buildWebpackConfig(options:BuildOptions):webpack.Configuration {
    const {
        mode,
        paths
    } = options

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
          },
        resolve: buildResolve(),
    }
}