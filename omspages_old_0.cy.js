describe('OmsOldPages', () => {
  it('passes', () => {
    cy.viewport(1468, 968) //设置浏览器大小，以防止菜单过长然后被遮住
    //TC1登录检查，登录可以变成环境配置化
    cy.visit('https://oms-uat.test.uco.com/login/')
    cy.get('[id=owl-login]')
    cy.get('[id=login]')
    cy.get('[id=username]').type('test')
    cy.get('[id=password]').type('dummy')
    cy.get('[type=submit]').click()

    //以下页面都为老页面，未匹配风格
    //TC3-1订单-订单列表，菜单上订单前面有空格:(
    cy.contains(' 订单').click()
    cy.contains('订单列表').click()
    cy.get('[id=platform_id]')
    cy.get('[id=status_chose]')
    cy.get('[id=paymentFrom]')
    cy.contains('查询订单').click()
    //TC3-2订单-订单操作日志查询
    cy.contains(' 订单').click()
    cy.contains('订单操作日志查询').click()
    cy.get('[name=showChildStatusChange]').click()
    //TC3-3订单-创建订单
    cy.contains(' 订单').click()
    cy.contains('创建订单').click() 
    cy.get('[id=platformId]')
    cy.contains('销售平台')
    //TC3-4订单-批量导入创建订单
    cy.contains(' 订单').click()
    cy.contains('批量导入创建订单').click() 
    cy.get('[id=selectPlatformId]')
    cy.contains('销售平台')
    //TC3-5订单-批量导入创建订单
    cy.contains(' 订单').click()
    cy.contains('导入完结订单号').click() 
    cy.get('[id=platformId]')
    cy.contains('店铺')
    //TC3-6订单-批量操作任务列表
    cy.contains(' 订单').click()
    cy.contains('批量操作任务列表').click() 
    cy.get('[name=import_excel]')
    cy.contains('excel导入')    
    //TC3-7订单-批量导入合并分组
    cy.contains(' 订单').click()
    cy.contains('批量导入合并分组').click() 
    cy.contains('选择文件')  
    //TC3-8订单-电子面单配置, 所有电子面单余量不做检查，要调用很多线上的key
    cy.contains(' 订单').click()
    cy.contains('电子面单配置').click() 
    cy.get('[id=selectApiType]')
    cy.contains('电子面单类型：')  
    //TC3-9订单-快递自动揽收配置
    cy.contains(' 订单').click()
    cy.contains('快递自动揽收配置').click() 
    cy.get('[id=add]')
    cy.contains('快递：')  
    //TC3-10订单-快递重量回传管理
    cy.contains(' 订单').click()
    cy.contains('快递重量回传管理').click() 
    cy.contains('新增').click()
    cy.get('[id=warehouse]')    
    //TC3-11订单-封箱门槛拦截
    cy.contains(' 订单').click()
    cy.contains('封箱门槛拦截').click() 
    //TC3-12订单-封箱拦截
    cy.contains(' 订单').click()
    cy.contains('封箱拦截').click() 
    cy.get('[id=platformIds]')
    //TC3-13订单-出库单下载控制
    cy.contains(' 订单').click()
    cy.contains('出库单下载控制').click() 
    cy.get('[id=platformType]')
    //TC3-14订单-检查未点发货的淘宝订单
    cy.contains(' 订单').click()
    cy.contains('检查未点发货的淘宝订单').click() 
    cy.get('[id=platform_id]')
    //TC3-15订单-审单工作报表
    cy.contains(' 订单').click()
    cy.contains('审单工作报表').click() 
    cy.get('[id=end]')
    //TC3-15订单-超时工作报表
    cy.contains(' 订单').click()
    cy.contains('超时订单报表').click() 
    cy.get('[id=platformId]')

    //TC1-1产品-唯品会订单产品价格维护
    cy.contains('产品').click()
    cy.contains('唯品会订单产品价格维护').click()
    //TC1-2产品-系列管理
    cy.contains('产品').click()
    cy.contains('系列管理').click()
    //TC1-3产品-产品定制化列表
    cy.contains('产品').click()
    cy.contains('产品定制化管理').click()
    //TC1-4产品-销售平台商品管理
    cy.contains('产品').click()
    cy.contains('销售平台商品管理').click()
    //TC1-5产品-淘宝商品页面自动更新
    cy.contains('产品').click()
    cy.contains('淘宝商品页面自动更新').click()

    //TC2-1供应链-平台库存管理
    cy.contains('供应链').click()
    cy.contains('库存管理').click()
    //TC2-2供应链-套装库存分配
    cy.contains('供应链').click()
    cy.contains('套装库存分配').click()
    //TC2-3供应链-在途库存
    cy.contains('供应链').click()
    cy.contains('在途库存').click()    
    //TC2-4供应链-Qimen外部库存导出
    cy.contains('供应链').click()
    cy.contains('Qimen外部库存导出').click() 
    //TC2-5供应链-返厂出库建议单
    cy.contains('供应链').click()
    cy.contains('返厂出库建议单').click()   
    //TC2-6供应链-仓库工单
    cy.contains('供应链').click()
    cy.contains('仓库工单').click()
    //TC2-7供应链-库存天数报表
    cy.contains('供应链').click()
    cy.contains('库存天数报表').click()
    //TC2-8供应链-库存状态变更  
    cy.contains('供应链').click()
    cy.contains('库存状态变更').click()
    //TC2-9供应链-分销拣货单 
    cy.contains('供应链').click()
    cy.contains('分销拣货单').click()
  })
})
