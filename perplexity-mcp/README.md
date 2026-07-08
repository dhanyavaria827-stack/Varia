# perplexity-mcp

A Claude Code plugin that connects Claude to [Perplexity's](https://www.perplexity.ai) search and reasoning API through the Model Context Protocol (MCP).

## Tools

| Tool | Model | Best for |
| --- | --- | --- |
| `perplexity_search` | Search API | Ranked web search results (titles, URLs, snippets) |
| `perplexity_ask` | `sonar-pro` | Quick conversational questions with real-time web context |
| `perplexity_research` | `sonar-deep-research` | Deep, comprehensive research with citations |
| `perplexity_reason` | `sonar-reasoning-pro` | Step-by-step reasoning and complex analysis |

## Install

From within Claude Code:

```
/plugin marketplace add dhanyavaria827-stack/varia
/plugin install perplexity-mcp@varia
```

You'll be prompted for your Perplexity API key, which you can generate at the [API Portal](https://console.perplexity.ai). The key is stored securely (system keychain, or `~/.claude/.credentials.json` as a fallback) and passed to the bundled MCP server as `PERPLEXITY_API_KEY`.

## Reconfigure

To update the stored API key later, run `/plugin` and edit this plugin's configuration, or reinstall it.

## More info

See the [Perplexity MCP Server docs](https://docs.perplexity.ai/guides/mcp-server) and the [modelcontextprotocol repo](https://github.com/perplexityai/modelcontextprotocol).
