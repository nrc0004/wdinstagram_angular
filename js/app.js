"use strict";

let wdiData = [
  { photo_url: 'http://i.imgur.com/XdcsOZL.png', author: 'John', body: 'doing stuff' },
  { photo_url: 'http://i.imgur.com/3uDxPBl.jpg', author: 'Sarah', body: 'doing more stuff' },
  { photo_url: 'http://i.imgur.com/gzdT63J.jpg', author: 'Kelly', body: 'doing even more stuff' },
  { photo_url: 'http://i.imgur.com/UdNZUdf.jpg', author: 'Susan', body: 'doing canadian stuff' },
  { photo_url: 'http://i.imgur.com/t2QHpLL.jpg', author: 'Bob', body: 'doing weird stuff' }
]

  angular
    .module("wdinstagram", ["ui.router"])
    .controller("wdinstagramController", ["$stateParams", wdinstagramControllerFunction])
    .config(["$stateProvider", RouterFunction])

  function RouterFunction ($stateProvider){
    $stateProvider
      .state("wdiIndex", {
        url: "/",
        templateUrl: "wdi-index.html",
        controller: "wdinstagramController",
        controlllerAs: "vm"
      })
      .state("wdiShow", {
        url: "/wdis/:id",
        templateUrl: "wdi-show.html",
        controller: "wdinstagramShowController",
        controlllerAs: "vm"
      })
  }
  function wdinstagramControllerFunction ($state, $stateParams) {
    this.wdis= wdiData;
    this.create = function (){
      this.wdis.$add(this.newWdi).then( () => this.newWdi = {} )
    }
  }
