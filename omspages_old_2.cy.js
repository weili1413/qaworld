describe("warehousepagescheck", () => {
    it("tests warehousepagescheck", () => {
      cy.viewport(1468, 968); 
      cy.visit("https://oms-uat.test.uco.com/login/");
      cy.get("#username").click();
      cy.get("#username").type("wuweili");
      cy.get("#password").click();
      cy.get("#password").type("dummy");
      cy.get("div:nth-of-type(4) > input").click();
      cy.location("href").should("eq", "https://oms-uat.test.uco.com/");
      //旧页面仓库菜单下面所有未前后端分离的页面打开检查
      cy.get("div.nav-collapse > ul > li:nth-of-type(7) > a").click();
      cy.get("li.open li:nth-of-type(1) > a").click();
      cy.location("href").should("eq", "https://oms-uat.test.uco.com/warehouse/printShippingLabel");
      cy.contains('仓库')
      cy.get("div.nav-collapse > ul > li:nth-of-type(7) > a").click();
      cy.get("li.open li:nth-of-type(2) > a").click();
      cy.location("href").should("eq", "https://oms-uat.test.uco.com/warehouse/printShippingLabel/prepackIndex");
      cy.contains('预包编码')
      cy.get("div.nav-collapse > ul > li:nth-of-type(7) > a").click();
      cy.get("li.open li:nth-of-type(3) > a").click();
      cy.location("href").should("eq", "https://oms-uat.test.uco.com/warehouse/splitPackage");
      cy.contains('打印模板')
      cy.get("div.nav-collapse > ul > li:nth-of-type(7) > a").click();
      cy.get("li.open li:nth-of-type(4) > a").click();
      cy.location("href").should("eq", "https://oms-uat.test.uco.com/warehouse/splitPackage/replace");
      cy.contains('打印模板')
      cy.get("div.nav-collapse > ul > li:nth-of-type(7) > a").click();
      cy.get("li.open li:nth-of-type(5) > a").click();
      cy.location("href").should("eq", "https://oms-uat.test.uco.com/giftcard/show");
      cy.contains('打印礼品卡')      
      cy.get("div.nav-collapse > ul > li:nth-of-type(7) > a").click();
      cy.get("li.active li:nth-of-type(6) > a").click();
      cy.location("href").should("eq", "https://oms-uat.test.uco.com/bbee/subtask");
      cy.contains('小蜜蜂打印子任务')  
      cy.get("div.nav-collapse > ul > li:nth-of-type(7) > a").click();
      cy.get("li.open > ul > li:nth-of-type(7) > a").click();
      cy.location("href").should("eq", "https://oms-uat.test.uco.com/bworder/showexp/");
      cy.contains('加工单效期分配') 
      cy.get("div.nav-collapse > ul > li:nth-of-type(7) > a").click();
      cy.get("li.open li:nth-of-type(8) > a").click();
      cy.location("href").should("eq", "https://oms-uat.test.uco.com/shipment/change");
      cy.contains('更改出库单快递公司及快递单号') 
      cy.get("div.nav-collapse > ul > li:nth-of-type(7) > a").click();
      cy.get("li.open li:nth-of-type(9) > a").click();
      cy.location("href").should("eq", "https://oms-uat.test.uco.com/config/platformContainerRelation");
      cy.contains('店铺箱型关系配置') 
      cy.get("div.nav-collapse > ul > li:nth-of-type(7) > a").click();
      cy.get("li.active li:nth-of-type(11) > a").click();
      cy.location("href").should("eq", "https://oms-uat.test.uco.com/rma/");
      cy.contains('RMA仓库收货') 
      cy.get("div.nav-collapse > ul > li:nth-of-type(7) > a").click();
      cy.get("li.open li:nth-of-type(12) > a").click();
      cy.location("href").should("eq", "https://oms-uat.test.uco.com/rma/return_record");
      cy.contains('RMA退件登记') 
      cy.get("div.nav-collapse > ul > li:nth-of-type(7) > a").click();
      cy.get("li.open li:nth-of-type(14) > a").click();
      cy.location("href").should("eq", "https://oms-uat.test.uco.com/rma/return_record/goto");
      cy.contains('请扫描快递单号') 
      cy.get("div.nav-collapse > ul > li:nth-of-type(7) > a").click();
      cy.get("li.open li:nth-of-type(15) > a").click();
      cy.location("href").should("eq", "https://oms-uat.test.uco.com/rma/receive_warehouse/config");
      cy.contains('RMA默认退回仓库配置') 
      cy.get("li:nth-of-type(7) span").click();
      cy.get("li.open li:nth-of-type(16) > a").click();
      cy.location("href").should("eq", "https://oms-uat.test.uco.com/rma/return_record/fast_receive");
      cy.contains('RMA极速收货') 
      cy.get("div.nav-collapse > ul > li:nth-of-type(7) > a").click();
      cy.get("li.open li:nth-of-type(18) > a").click();
      cy.location("href").should("eq", "https://oms-uat.test.uco.com/receivingsystem/receiving/orderlist");
      cy.contains('收货单列表') 
      //新建退件登记会弹出框提示摄像头，先不做这个页面检查
    });
  });
  
  
