#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "usdevjobs",
  boardId: "usdevjobs-official",
  domain: "usdev.jobs",
  npmName: "zc-usdevjobs-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
