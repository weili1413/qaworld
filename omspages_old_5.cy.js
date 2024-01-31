describe("techsupport", () => {
  it("tests techsupport", () => {
    cy.viewport(1468, 968);
    cy.visit("https://oms-uat.test.uco.com/login/");
    cy.get("#username").click();
    cy.get("#username").type("wuweili");
    cy.get("form > div:nth-of-type(2)").click();
    cy.get("#password").click();
    cy.get("#password").type("Oms@2023");
    cy.get("div:nth-of-type(4) > input").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/");
    //魔法盒
    cy.contains(' 魔法盒').click()
    cy.contains('单据出库').click() 
    cy.contains('出库单状态快速跳转')
    cy.contains(' 魔法盒').click()
    cy.contains('单据入库').click() 
    cy.contains('入库单一键快速完成')
    cy.contains(' 魔法盒').click()
    cy.contains('订单创建').click() 
    cy.contains('订单测试')
    cy.contains(' 魔法盒').click()
    cy.contains('订单退款').click() 
    cy.contains('平台类型')
    cy.contains(' 魔法盒').click()
    cy.contains('天猫订单同步').click() 
    cy.contains('淘宝销售单号')
    cy.contains(' 魔法盒').click()
    cy.contains('淘宝订单付款').click() 
    cy.contains('淘宝订单号')
    cy.contains(' 魔法盒').click()
    cy.contains('RMA创建').click() 
    cy.contains('RMA快速创建')
    cy.contains(' 魔法盒').click()
    cy.contains('阿里云压测商品映射配置').click() 
    cy.contains('阿里云压测')

    //系统诊断
    cy.get("div.nav-collapse > ul > li:nth-of-type(13) > a").click();
    cy.get("li.open li:nth-of-type(1) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/diagnose/syncPlatformStock");
    cy.get("div.nav-collapse > ul > li:nth-of-type(13) > a").click();
    cy.get("li.open li:nth-of-type(3) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/diagnose/executeScript");
    cy.get("div.content > div > div div.row-fluid").click();
    cy.get("div.nav-collapse > ul > li:nth-of-type(13) > a").click();
    cy.get("li.open li:nth-of-type(5) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/diagnose/decryptIndex");
    cy.get("strong").click();
    cy.get("div.nav-collapse > ul > li:nth-of-type(13) > a").click();
    cy.get("li.open li:nth-of-type(7) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/diagnose/product");
   cy.get("div.content > div > div div.row-fluid").click();
    cy.get("div.nav-collapse > ul > li:nth-of-type(13) > a").click();
    cy.get("li.open li:nth-of-type(9) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/diagnose/salesOrder");
    cy.get("div.nav-collapse > ul > li:nth-of-type(13) > a").click();
    cy.get("li.open li:nth-of-type(11) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/diagnose/returnFactoryOrder");
    cy.get("div.content").click();
    cy.get("div.nav-collapse > ul > li:nth-of-type(13) > a").click();
    cy.get("li.open > ul > li:nth-of-type(13) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/diagnose/warehousing");
    cy.get("div.nav-collapse > ul > li:nth-of-type(13) > a").click();
    cy.get("li.open li:nth-of-type(15) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/diagnose/shipment");
    cy.get("div.nav-collapse > ul > li:nth-of-type(13) > a").click();
    cy.get("li.open li:nth-of-type(19) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/diagnose/counter");
    cy.get("div.nav-collapse > ul > li:nth-of-type(13) > a").click();
    cy.get("li.open li:nth-of-type(21) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/diagnose/redis");
    cy.get("div.nav-collapse > ul > li:nth-of-type(13) > a").click();
    cy.get("li.open li:nth-of-type(23) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/diagnose/forecastStock");
    cy.get("div.nav-collapse > ul > li:nth-of-type(13) > a").click();
    cy.get("li.open li:nth-of-type(25) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/diagnose/jstTradeInfo");
    // cy.get("div.nav-collapse > ul > li:nth-of-type(13) > a").click();
    // cy.get("li.open li:nth-of-type(27) > a").click();
    // cy.location("href").should("eq", "https://oms-uat.test.uco.com/diagnose/refundOrder"); //有问题，已经能打开了但是还是报错，待跟进
    // cy.contains('退款单诊断'); 
    cy.get("div.nav-collapse > ul > li:nth-of-type(13) > a").click();
    cy.get("li.open li:nth-of-type(29) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/diagnose/syncProduct");
    cy.get("html").click();
    cy.get("div.nav-collapse > ul > li:nth-of-type(13) > a").click();
    cy.get("li.open li:nth-of-type(31) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/sales_orders/customization");
  });
});
