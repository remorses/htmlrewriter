import init from './dist/html_rewriter.js'

import { HTMLRewriterWrapper } from './dist/html_rewriter_wrapper.js'

import wasm from './dist/html_rewriter_bg.wasm?module'

export const HTMLRewriter = HTMLRewriterWrapper(init(wasm))
