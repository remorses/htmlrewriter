/* tslint:disable */
/* eslint-disable */
export class Comment {
  private constructor();
  free(): void;
  before(content: string, content_type?: any | null): void;
  after(content: string, content_type?: any | null): void;
  replace(content: string, content_type?: any | null): void;
  remove(): void;
  readonly removed: boolean;
  text: string;
}
export class Doctype {
  private constructor();
  free(): void;
  readonly name: any;
  readonly publicId: any;
  readonly systemId: any;
}
export class DocumentEnd {
  private constructor();
  free(): void;
  append(content: string, content_type?: any | null): void;
}
export class Element {
  private constructor();
  free(): void;
  before(content: string, content_type?: any | null): void;
  after(content: string, content_type?: any | null): void;
  replace(content: string, content_type?: any | null): void;
  remove(): void;
  getAttribute(name: string): any;
  hasAttribute(name: string): boolean;
  setAttribute(name: string, value: string): void;
  removeAttribute(name: string): void;
  prepend(content: string, content_type?: any | null): void;
  append(content: string, content_type?: any | null): void;
  setInnerContent(content: string, content_type?: any | null): void;
  removeAndKeepContent(): void;
  onEndTag(handler: Function): void;
  readonly removed: boolean;
  tagName: string;
  readonly namespaceURI: any;
  readonly attributes: any;
}
export class EndTag {
  private constructor();
  free(): void;
  before(content: string, content_type?: any | null): void;
  after(content: string, content_type?: any | null): void;
  remove(): void;
  name: string;
}
export class HTMLRewriter {
  free(): void;
  constructor(output_sink: Function, options?: any | null);
  on(selector: string, handlers: any): void;
  onDocument(handlers: any): void;
  write(chunk: Uint8Array): void;
  end(): void;
  readonly asyncifyStackPtr: number;
}
export class TextChunk {
  private constructor();
  free(): void;
  before(content: string, content_type?: any | null): void;
  after(content: string, content_type?: any | null): void;
  replace(content: string, content_type?: any | null): void;
  remove(): void;
  readonly removed: boolean;
  readonly text: string;
  readonly lastInTextNode: boolean;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_endtag_free: (a: number, b: number) => void;
  readonly endtag_name: (a: number, b: number) => void;
  readonly endtag_set_name: (a: number, b: number, c: number, d: number) => void;
  readonly endtag_before: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly endtag_after: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly endtag_remove: (a: number, b: number) => void;
  readonly __wbg_htmlrewriter_free: (a: number, b: number) => void;
  readonly htmlrewriter_new: (a: number, b: number) => number;
  readonly htmlrewriter_on: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly htmlrewriter_onDocument: (a: number, b: number, c: number) => void;
  readonly htmlrewriter_write: (a: number, b: number, c: number, d: number) => void;
  readonly htmlrewriter_end: (a: number, b: number) => void;
  readonly htmlrewriter_asyncify_stack_ptr: (a: number) => number;
  readonly __wbg_comment_free: (a: number, b: number) => void;
  readonly comment_before: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly comment_after: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly comment_replace: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly comment_remove: (a: number, b: number) => void;
  readonly comment_removed: (a: number, b: number) => void;
  readonly comment_text: (a: number, b: number) => void;
  readonly comment_set_text: (a: number, b: number, c: number, d: number) => void;
  readonly textchunk_text: (a: number, b: number) => void;
  readonly textchunk_last_in_text_node: (a: number, b: number) => void;
  readonly textchunk_before: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly textchunk_removed: (a: number, b: number) => void;
  readonly __wbg_textchunk_free: (a: number, b: number) => void;
  readonly textchunk_replace: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly textchunk_after: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly textchunk_remove: (a: number, b: number) => void;
  readonly __wbg_element_free: (a: number, b: number) => void;
  readonly element_before: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly element_after: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly element_replace: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly element_remove: (a: number, b: number) => void;
  readonly element_removed: (a: number, b: number) => void;
  readonly element_tag_name: (a: number, b: number) => void;
  readonly element_set_tag_name: (a: number, b: number, c: number, d: number) => void;
  readonly element_namespace_uri: (a: number, b: number) => void;
  readonly element_attributes: (a: number, b: number) => void;
  readonly element_getAttribute: (a: number, b: number, c: number, d: number) => void;
  readonly element_hasAttribute: (a: number, b: number, c: number, d: number) => void;
  readonly element_setAttribute: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly element_removeAttribute: (a: number, b: number, c: number, d: number) => void;
  readonly element_prepend: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly element_append: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly element_setInnerContent: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly element_removeAndKeepContent: (a: number, b: number) => void;
  readonly element_onEndTag: (a: number, b: number, c: number) => void;
  readonly __wbg_doctype_free: (a: number, b: number) => void;
  readonly doctype_name: (a: number, b: number) => void;
  readonly doctype_public_id: (a: number, b: number) => void;
  readonly doctype_system_id: (a: number, b: number) => void;
  readonly __wbg_documentend_free: (a: number, b: number) => void;
  readonly documentend_append: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
