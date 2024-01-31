describe("financecheck", () => {
  it("tests financecheck", () => {
    cy.viewport(1468, 968);
    //再登录一次
    cy.visit("https://oms-uat.test.uco.com/login/");
    cy.get("#username").click();
    cy.get("#username").type("test");
    cy.get("#password").click();
    cy.get("#password").type("dummy");
    cy.get("div:nth-of-type(4) > input").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/");
    cy.get("div.nav-collapse > ul > li:nth-of-type(8) > a").click();
    cy.get("li.open > ul a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/dataTools/finance/index");
    cy.contains('用于财务与品牌方结算')
    cy.get("div.nav-collapse > ul > li:nth-of-type(9) > a").click();
    cy.get("li.open li:nth-of-type(1) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/customer/index.html");
    cy.contains('客户管理')
    cy.get("div.nav-collapse > ul > li:nth-of-type(9) > a").click();
    cy.get("li.open li:nth-of-type(2) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/customer/import.html");
    cy.contains('导入客户')
    cy.get("div.nav-collapse > ul > li:nth-of-type(9) > a").click();
    cy.get("li.open li:nth-of-type(3) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/discount_rule/?_format=html");
    cy.contains('折扣规则管理')
    //cy.get("div.nav-collapse > ul > li:nth-of-type(9) > a").click();
    // cy.get("li.active li:nth-of-type(6) > a").click();
    // cy.location("href").should("eq", "https://oms-uat.test.uco.com/virtual_account/");
    // cy.contains('虚拟账号管理') //有问题换一种方式待改进
    cy.get("div.nav-collapse > ul > li:nth-of-type(10) > a").click();
    cy.get("li.open li:nth-of-type(1) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/brand/index.html");
    cy.contains('品牌管理')
    cy.get("div.nav-collapse > ul > li:nth-of-type(10) > a").click();
    cy.get("li.open li:nth-of-type(3) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/brand/brand/product/manage.html");
    cy.contains('品牌功能配置')
    cy.get("div.nav-collapse > ul > li:nth-of-type(10) > a").click();
    cy.get("li.open li:nth-of-type(4) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/products/platform");
    cy.contains('产品品牌')
    cy.get("div.nav-collapse > ul > li:nth-of-type(10) > a").click();
    cy.get("li.open li:nth-of-type(6) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/receiveperiodrule/index.html");
    cy.contains('店铺')
    cy.get("div.nav-collapse > ul > li:nth-of-type(11) > a").click();
    cy.get("li.open li:nth-of-type(1) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/rma/search");
    cy.contains('售后客服')
    cy.get("div.nav-collapse > ul > li:nth-of-type(11) > a").click();
    cy.get("li.active li:nth-of-type(2) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/rma/distributionImport");
    cy.contains('导入RMA')
    cy.get("div.nav-collapse > ul > li:nth-of-type(11) > a").click();
    cy.get("li.open li:nth-of-type(4) > a").click();
    cy.location("href").should("eq", "https://oms-uat.test.uco.com/rma/multiCreate");
    cy.contains('请粘贴从CRM得到的编码')
    cy.get("div.nav-collapse > ul > li:nth-of-type(12) > a").click();
    cy.get("div.well > div:nth-of-type(2)").click();
  });
});
