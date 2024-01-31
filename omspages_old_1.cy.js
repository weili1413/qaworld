describe('OmsOldPages', () => {
  it('passes', () => {
    //TC1登录检查，登录可以变成环境配置化
    cy.viewport(1468, 968) //设置浏览器大小，以防止菜单过长然后被遮住
    cy.visit('https://oms-uat.test.uco.com/login/')
    cy.get('[id=owl-login]')
    cy.get('[id=login]')
    cy.get('[id=username]').type('test')
    cy.get('[id=password]').type('dummy')
    cy.get('[type=submit]').click()
    
    //以下页面都为老页面，未匹配风格
    //TC4-1订单履行-订单列表
    cy.contains(' 订单履行').click()
    cy.contains('促销列表').click()
    cy.contains('活动ID：')
    cy.get('[id=btnSearch]').click()
    //TC4-2订单履行-创建促销（所有类型）
    cy.contains(' 订单履行').click()
    cy.contains('创建促销（所有类型）').click()
    cy.get('[id=divBase]')
    cy.contains('活动名称')
    //TC4-3订单履行-创建买送促销
    cy.contains(' 订单履行').click()
    cy.contains('创建买送促销').click()
    cy.get('[id=selectPlatformId]')
    cy.contains('活动店铺')
    //TC4-4订单履行-创建买送促销
    cy.contains(' 订单履行').click()
    cy.contains('创建买送促销').click()
    cy.get('[id=selectPlatformId]')
    cy.contains('活动店铺')
    //TC4-5订单履行-批量导入买送促销
    cy.contains(' 订单履行').click()
    cy.contains('批量导入买送促销').click()
    cy.contains('店铺类型')
    //TC4-6订单履行-创建满赠促销
    cy.contains(' 订单履行').click()
    cy.contains('创建满赠促销').click()
    cy.contains('活动名称')
    //TC4-7订单履行-预跑促销配置，已经没有用，待废弃
    cy.contains(' 订单履行').click()
    cy.contains('预跑促销配置').click()
    cy.contains('添加预跑数据')
    //TC4-8订单履行-分仓规则
    cy.contains(' 订单履行').click()
    cy.contains('分仓规则').click()
    cy.contains('操作日志')
    //TC4-9订单履行-分仓规则
    cy.contains(' 订单履行').click()
    cy.contains('分仓规则').click()
    cy.contains('操作日志')  
    //TC4-10订单履行-仓库可选快递配置,要调整到最后检查，因为页面菜单会失效，点击不了其他的，之前设计问题
    // cy.contains(' 订单履行').click()
    // cy.contains('仓库可选快递配置')
    //TC4-11订单履行-平台快递超重配置
    cy.contains(' 订单履行').click()
    cy.contains('平台快递超重配置').click()
    cy.contains('超重限额')  
    cy.contains('添加')
    //TC4-12订单履行-自定义时效规则
    cy.contains(' 订单履行').click()
    cy.contains('自定义时效规则').click()
    //TC4-13订单履行-快递揽收时间配置
    cy.contains(' 订单履行').click()
    cy.contains('快递揽收时间配置').click()
    cy.get('[id=addDeliveryLimitTimeBtn]')
    //TC4-14订单履行-备注过滤规则
    cy.contains(' 订单履行').click()
    cy.contains('备注过滤规则').click()
    //TC4-15订单履行-批量导入备注过滤规则
    cy.contains(' 订单履行').click()
    cy.contains('批量导入备注过滤规则').click()
    cy.contains('备注规则导入模板下载')
    //TC4-16订单履行-备注过滤规则
    cy.contains(' 订单履行').click()
    cy.contains('批量导入备注过滤规则').click()
    cy.contains('导入')
    //TC4-17订单履行-店铺合并/高亮规则
    cy.contains(' 订单履行').click()
    cy.contains('店铺合并/高亮规则').click()
    cy.contains('店铺名称')
    //TC4-18订单履行-自动审单配置，前后端分离中
    cy.contains(' 订单履行').click()
    cy.contains('自动审单配置').click()
    cy.contains('保存').click()
    //TC4-19订单履行-地址白名单配置
    cy.contains(' 订单履行').click()
    cy.contains('地址白名单设置').click()
    cy.contains('白名单导入')
    //TC4-20订单履行-相似出库单分析配置，待废弃
    cy.contains(' 订单履行').click()
    cy.contains('相似出库单分析配置').click()
    cy.contains('HOLD_ALL_ORDER')
    //TC4-21订单履行-快速取消规则配置
    cy.contains(' 订单履行').click()
    cy.contains('快速取消规则配置').click()
    cy.contains('快速取消配置')

    //TC5-1规则中台-新版促销，放在最后一个检查，链接会popup出来，回不到原菜单页面
    // cy.contains(' 规则中台').click()
    // cy.contains('新版促销').click()
    // cy.get('[id=app]')
    // cy.contains('店铺')
    //TC5-1规则中台-规则中台设置 
    cy.contains(' 规则中台').click()
    cy.contains('规则中台设置').click()

    //TC6-1前置单-前置单列表 
    cy.contains(' 前置单').click()
    cy.contains('前置单列表').click()
    cy.contains('店铺：')    
    //TC6-2前置单-取消前置单
    cy.contains(' 前置单').click()
    cy.contains('取消前置单').click()
    cy.contains('前置单Ids:')     
    //TC6-3前置单-导入前置单
    cy.contains(' 前置单').click()
    cy.contains('导入前置单').click()
    cy.contains('对应环境的url')
    //TC6-4前置单-前置单检查
    cy.contains(' 前置单').click()
    cy.contains('前置单检查').click()
    cy.contains('订单ID')     
    //TC6-5前置单-订单申请取消
    cy.contains(' 前置单').click()
    cy.contains('订单申请取消').click()
    cy.contains('订单ID')
    //TC6-6前置单-单据在途库存操作，待废弃，没有实际用途
    cy.contains(' 前置单').click()
    cy.contains('单据在途库存操作').click()
    cy.contains('单据在途库存操作')  
  })
})
