const apps = [
    /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
    {
        name: "child",
        entry: "//localhost:4042",
        container: "#micro_su",
        activeRule: "/child/home"
      },
      {
        name: 'system',
        entry: { scripts: ['//localhost:7100/main.js'] },
        container: '#yourContainer2',
        activeRule: '/yourActiveRule2',
      },
];

export default apps;