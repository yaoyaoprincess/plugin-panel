// ============================================================
//  plugin-panel — 插件面板
//  侧边栏快捷入口，一键跳转 EchoMusic 自带插件面板
// ============================================================

let ctx = null;
let disposeSidebar = null;

export async function activate(_ctx) {
  ctx = _ctx;

  disposeSidebar = ctx.ui.sidebar.addItem({
    id: "plugin-panel",
    title: "插件面板",
    icon: "tabler:apps",
    section: "plugins",
    onClick: () => {
      ctx.router.push("/main/settings/plugins");
    },
  });
}

export function deactivate() {
  disposeSidebar?.();
  disposeSidebar = null;
  ctx = null;
}
