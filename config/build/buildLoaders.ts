import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'

export default function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/i,
    use: ['@svgr/webpack']
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const scssLoader = buildCssLoader(isDev)

  return [
    typescriptLoader,
    scssLoader,
    svgLoader,
    fileLoader
  ]
}
