import type { LoaderFunction, ActionFunction } from "@remix-run/cloudflare";

export function withAuth(fn: LoaderFunction | ActionFunction): LoaderFunction | ActionFunction {
  return async (args) => {
    // ✅ احراز هویت غیرفعال شده - بدون نیاز به API_KEY
    return fn(args);
  };
}
