# api-dashboard
code base with MFE


ng new api-dashboard-shared-util-ui --create-application=false
cd api-dashboard-shared-util-ui
ng generate library api-dashboard-shared-util
ng generate library events-dashboard




ng new api-dashboard-master-ui
ng add @angular-architects/module-federation


ng new api-dashboard-idp-token
ng add @angular-architects/module-federation

ng generate module idp-license --routing --route  --module app

ng generate module idp-license/view-license   --module idp-license

ng generate component idp-license/view-license  --module idp-license/view-license
ng generate component idp-license/view-license/component/serach-license  --module idp-license/view-license
ng generate service idp-license/view-license/service/idp-common-service
ng generate service service/api-service   
ng generate component shared/session-extension-modal 
ng generate guard service/basic





ng generate module error --routing --route  --module app
ng generate component error  --module errror
ng generate guard service/basic
