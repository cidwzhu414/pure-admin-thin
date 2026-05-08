// @ts-check
/**
 * 当前项目 `package.json` 包含 `"type": "module"`，因此 `.js` 会被按 ESM 解析。
 * 这里使用 ESM 语法转发导出 `.prettierrc.cjs`，避免两份配置不一致造成格式化结果漂移。
 * @type {import("prettier").Config}
 */
import config from './.prettierrc.cjs'

export default config
