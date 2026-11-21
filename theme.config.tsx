import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '1.75rem',
          height: '1.75rem',
          borderRadius: '0.375rem',
          background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
          color: '#fff',
          fontSize: '0.75rem',
          fontWeight: 700
        }}
      >
        PG
      </span>
      <span style={{ fontWeight: 700, fontSize: '1rem' }}>nl2sql-proxy</span>
      <span
        style={{
          fontSize: '0.7rem',
          opacity: 0.65,
          border: '1px solid currentColor',
          borderRadius: '9999px',
          padding: '0.05rem 0.4rem'
        }}
      >
        手册
      </span>
    </span>
  ),
  docsRepositoryBase: 'https://github.com/krtMisaka10032/nextra-docs-template/tree/main',
  head: function Head() {
    const { title } = useConfig()
    const isHome = !title || title === 'nl2sql-proxy 使用手册'
    const pageTitle = isHome
      ? 'nl2sql-proxy 使用手册'
      : `${title} | nl2sql-proxy 使用手册`
    return (
      <>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="PostgreSQL 统一查询代理 nl2sql-proxy 的使用手册：安装、配置、HTTP API、MCP 接入、NL2SQL 与运维安全。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:description"
          content="通过一个接口用自然语言或 SQL 查询 PostgreSQL，支持读写门禁、审计与 MCP。"
        />
        <style>{`
          .nextra-toc [data-level="1"] {
            color: #000 !important;
            font-weight: 600 !important;
          }
          .nextra-toc [data-level="1"]:hover {
            color: #2563eb !important;
          }
          .dark .nextra-toc [data-level="1"] {
            color: #fff !important;
          }
          .dark .nextra-toc [data-level="1"]:hover {
            color: #60a5fa !important;
          }

          .nextra-sidebar-container *,
          .nextra-sidebar * {
            font-weight: normal;
          }
          .nextra-sidebar-container [data-level="1"],
          .nextra-sidebar [data-level="1"] {
            font-weight: 700 !important;
          }
          .nextra-sidebar-container [data-level="2"],
          .nextra-sidebar-container [data-level="3"],
          .nextra-sidebar [data-level="2"],
          .nextra-sidebar [data-level="3"] {
            font-weight: normal !important;
          }

          .nextra-main {
            border-left: 1px solid #e5e7eb !important;
            margin-left: 1rem !important;
          }
          .dark .nextra-main {
            border-left-color: #374151 !important;
          }

          .nextra-sidebar-container {
            border-right: 1px solid #e5e7eb !important;
            margin-right: 1rem !important;
          }
          .dark .nextra-sidebar-container {
            border-right-color: #374151 !important;
          }

          .nextra-toc {
            position: relative;
            padding-left: 1rem !important;
            margin-left: 1rem !important;
          }
          .nextra-toc::before {
            display: none;
          }
        `}</style>
      </>
    )
  },
  navigation: {
    prev: true,
    next: true
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    float: true,
    title: '本页目录'
  },
  editLink: {
    content: '在 GitHub 上编辑此页'
  },
  footer: {
    content: (
      <div className="flex flex-col gap-2">
        <div className="text-sm">
          nl2sql-proxy 使用手册 · PostgreSQL 统一查询代理
        </div>
        <div className="text-xs text-gray-500">
          Built with Nextra
        </div>
      </div>
    )
  }
}

export default config