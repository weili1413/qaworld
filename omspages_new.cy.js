describe('LoginForAll', () => {
  it('LoginForAll', () => {
    //TC1登录检查
    cy.viewport(1468, 968) //设置浏览器大小，以防止菜单过长然后被遮住
    cy.visit('https://oms-uat.test.uco.com/')
    cy.get('[id=owl-login]')
    cy.get('[id=login]')
    cy.get('[id=username]').type('test')
    cy.get('[id=password]').type('dummy')
    cy.get('[type=submit]').click()

    //TC2产品-品牌商品管理下面的页面打开、搜索和结果确认
    cy.contains('产品').click()
    cy.contains('产品资料').click()
    cy.contains('重置').click()
    cy.contains('查询')
    cy.contains('新增产品')
    // //查询娇韵诗的商品资料，待修改成前后端分离新的实现
    // cy.get('[id=productCodeForExportResult]').type('clr')
    // cy.contains('搜索').click()
    // //检查是否出现结果并有对应的查看和编辑按钮，有则pass
    // cy.get('[id=productTable]').should('contain', '查看').and('contain','编辑')

    //以下页面全部完成前后端分离
    //TC1-1产品-库存自动上架
    cy.contains('产品库存中心').click()
    cy.contains('商品管理').click()
    cy.contains('库存自动上架').click()
    cy.contains('重 置').click()
    cy.contains('查 询').click()

    //TC2-订单中心-超过10个页面还未实现前后端分离TODO
    //TC2-1订单中心-订单拦截
    cy.contains('订单中心').click()
    cy.contains('订单拦截').click()
    cy.contains('前置hold单规则列表').click()  
    cy.contains('重置')
    cy.contains('查询')
    //TC2-2订单中心-假产品替换
    cy.contains('订单中心').click()
    cy.contains('假产品替换').click()
    cy.contains('重置').click()
    cy.contains('查询')
    //TC2-3订单中心-预跑推单
    cy.contains('订单中心').click()
    cy.contains('预跑推单').click()
    cy.contains('重置').click()
    cy.contains('查询')
    //TC2-4订单中心-直播规则配置
    cy.contains('订单中心').click()
    cy.contains('直播规则配置').click() 
    cy.contains('重置').click()
    cy.contains('查询').click()

    //TC3-1供应链仓储中心-入库单
    cy.contains('供应链仓储中心').click()
    cy.contains('入库单').click() 
    cy.contains('重置').click()
    cy.contains('查询').click()
    //TC3-3供应链仓储中心-采购建议单
    cy.contains('供应链仓储中心').click()
    cy.contains('采购建议单').click() 
    cy.contains('查询').click()
    cy.contains('重置').click()
    //TC3- 供应链仓储中心-返厂出库建议单TODO
    //TC3-4供应链仓储中心-采购建议单
    cy.contains('供应链仓储中心').click()
    cy.contains('返厂出库单').click() 
    cy.contains('查询').click()
    cy.contains('重置').click()
    //TC3-2供应链仓储中心-出库单
    cy.contains('供应链仓储中心').click()
    cy.contains('出库单').click() 
    cy.contains('重置').click()
    cy.contains('查询').click()
    //TC3-5供应链仓储中心-预包列表
    cy.contains('供应链仓储中心').click()
    cy.contains('预包列表').click() 
    cy.get('div[role="combobox"]')  // 通过 role 属性选择 combobox 元素
    .eq(0)
    .find('.ant-select-selection__placeholder')  // 找到包含 "请输入店铺名称" 的元素
    .should('be.visible')  // 确保元素可见
    //TC3-6供应链仓储中心-预包计算
    cy.contains('供应链仓储中心').click()
    cy.contains('预包计算').click() 
    cy.contains('查 询').click()
    cy.contains('重 置').click()
    //TC3-供应链仓储中心-仓库工单TODO
    //TC3-7供应链仓储中心-盘盈盘亏报废单
    cy.contains('供应链仓储中心').click()
    cy.contains('盘盈盘亏报废单').click() 
    cy.contains('查询').click()
    cy.contains('重置').click()
    //TC3-8供应链仓储中心-调拨单列表
    cy.contains('供应链仓储中心').click()
    cy.contains('调拨单列表').click() 
    cy.contains('查询').click()
    cy.contains('重置').click()
    //TC3-9供应链仓储中心-创建调拨单
    cy.contains('供应链仓储中心').click()
    cy.contains('创建调拨单').click() 
    cy.contains('保存').click()
    //TC3-供应链仓储中心-库存状态变更单TODO
    //TC3-10供应链仓储中心-留样管理
    cy.contains('供应链仓储中心').click()
    cy.contains('留样管理').click() 
    cy.contains('查询').click()
    cy.contains('重置').click()
    //TC3-11供应链仓储中心-耗材管理
    cy.contains('供应链仓储中心').click()
    cy.contains('耗材管理').click() 
    cy.contains('查询').click()
    cy.contains('重置').click()
    //TC3-12供应链仓储中心-耗材分配模式
    cy.contains('供应链仓储中心').click()
    cy.contains('耗材分配模式').click() 
    cy.contains('查询').click()
    cy.contains('重置').click()
    //TC3-供应链仓储中心-组套有效期分配ToDo
    //TC3-供应链仓储中心-仓库发货操作ToDo
    //TC3-供应链仓储中心-仓库收货操作ToDo
    //TC3-供应链仓储中心-壹键仓ToDo
    //TC3-14供应链仓储中心-特征值分析 
    cy.contains('供应链仓储中心').click()
    cy.contains('特征值分析').click() 
    cy.contains('组包子件数')

    //TC4-规则中心-其他各种规则（10个以上）还未前后端分离TODO
    //TC4-1规则中心-拆单规则设置
    cy.contains('规则中心').click()
    cy.contains('拆单规则设置').click()
    cy.contains('查询').click()
    cy.contains('重置').click()
    //TC4-2规则中心-预跑规则配置
    cy.contains('规则中心').click()
    cy.contains('预跑规则配置').click()
    cy.contains('查询').click()
    cy.contains('重置').click()
    //TC4-3规则中心-预跑推单规则
    cy.contains('规则中心').click()
    cy.contains('预跑推单规则').click()
    cy.contains('查询').click()
    cy.contains('重置').click()
    //TC4-4规则中心-出库效期规则
    cy.contains('规则中心').click()
    cy.contains('出库效期规则').click()
    cy.contains('查 询').click()
    cy.contains('重 置').click()
    //TC4-5规则中心-新版分仓
    cy.contains('规则中心').click()
    cy.contains('新版分仓').click()
    cy.contains('查 询').click()
    cy.contains('重 置').click()

    //TC5-1审批流-审批规则列表
    cy.contains('审批流').click()
    cy.contains('审批规则列表').click()
    cy.contains('查询').click()
    cy.contains('调拨单审批规则').click()
    cy.contains('返厂单审批规则').click()
    cy.contains('手工单审批规则').click()
    cy.contains('采购单审批规则').click()
    //TC-2审批流-调拨单审批列表
    cy.contains('审批流').click()
    cy.contains('调拨单审批列表').click()
    cy.contains('查询').click()
    cy.contains('重置').click()
    cy.contains('审批成功').click()
    cy.contains('审批失败').click()
    //TC5-3审批流-手工订单审批列表
    cy.contains('审批流').click()
    cy.contains('手工订单审批列表').click()
    cy.contains('查询').click()
    cy.contains('重置').click()
    cy.contains('审批成功').click()
    cy.contains('审批失败').click()
    //TC5-4审批流-手工订单审批列表
    cy.contains('审批流').click()
    cy.contains('返厂单审批列表').click()
    cy.contains('查询').click()
    cy.contains('重置').click()
    cy.contains('审批成功').click()
    cy.contains('审批失败').click()
    //TC5-5审批流-采购建议单审批列表
    cy.contains('审批流').click()
    cy.contains('采购建议单审批列表').click()
    cy.contains('查询').click()
    cy.contains('重置').click()
    cy.contains('审批成功').click()
    cy.contains('审批失败').click()

    //TC6-售后中心-其他多个还未前后端分离TODO
    //TC6-1售后中心-售后管理中心
    cy.contains('售后中心').click()
    cy.contains('售后管理中心').click()
    cy.contains('销售平台')
    cy.contains('店铺名称')

    //TC7-客户中心-其他多个还未前后端分离TODO
    //TC7-1客户中心-供应商列表
    cy.contains('客户中心').click()
    cy.contains('供应商列表').click()
    cy.contains('查 询').click()
    cy.contains('重 置').click()

    //TC8-系统工具其他还未做前后端分离TODO
    //TC8-1系统工具-Constants查看
    cy.contains('系统工具').click()
    cy.contains('Constants查看').click()
    cy.contains('同步CMS配置数据')
    cy.contains('配货库房')

    //TC9-1系统管理-用户管理
    cy.contains('系统管理').click()
    cy.contains('用户管理').click()
    cy.contains('查询')
    cy.contains('重置')

    //TC9-2系统管理-角色管理
    cy.contains('系统管理').click()
    cy.contains('角色管理').click()
    cy.contains('查询').click()
    cy.contains('ROLE_ADMIN')
    //点击后popup出新页面如何处理，待跟进
    //cy.contains('添加角色').click()
    //cy.contains('全部展开').click()
    //cy.contains('全部收起').click()
    //cy.contains('通用数据权限配置').click()
    //cy.contains('店铺')
    //cy.contains('仓库')
    //cy.contains('品牌')
    //TC7-3系统管理-Config设置
    cy.contains('系统管理').click()
    cy.contains('Config设置').click()
  })
})

