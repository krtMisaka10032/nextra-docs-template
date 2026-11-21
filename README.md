# nl2sql-proxy 使用手册

PostgreSQL 统一查询代理 **nl2sql-proxy** 的用户手册，基于 [Nextra](https://nextra.site) 构建，支持静态导出。

手册内容覆盖：安装启动、配置、HTTP API、MCP 接入、SQL 安全策略、NL2SQL 原理、业务语料维护、审计与安全、故障排查。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:3000
```

## 构建静态站点

```bash
npm run build    # 导出到 out/（next.config.mjs 中 output: 'export'）
```

`out/` 目录可直接部署到任意静态托管。

## 目录结构

```text
pages/
  index.mdx                  # 简介
  getting-started/           # 安装、快速上手、配置
  guide/                     # 架构、查询模式、安全策略、NL2SQL、语料、Schema、MCP、输出
  api-reference/             # HTTP API、MCP 工具、错误码
  operations/                # 安全模型、审计、故障排查
  faq.mdx                    # 常见问题
theme.config.tsx             # 站点导航、Logo、页脚与 SEO
```

## 内容维护

- 页面为 MDX，直接编辑 `pages/` 下文件
- 侧边栏顺序由各目录的 `_meta.js` 控制
- 站点标题、Logo、页脚在 `theme.config.tsx`
- 内部链接使用站内路径，例如 `/guide/query-modes`

> 本仓库只包含文档站，不包含 nl2sql-proxy 服务源码。

## 许可

MIT