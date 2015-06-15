@extends('layouts.master')

@section('content')
    <div class="panel-standard" ng-controller="SingleDomainController as singleDomainCtrl" ng-init="singleDomainCtrl.domainId = {{ $domainId }}">
        <div class="row">
            <div class="col-md-10">
                <h3 ng-bind="singleDomainCtrl.domainInfo.title"></h3>
                <small ng-if="singleDomainCtrl.domainInfo.category_id > 0">([[ singleDomainCtrl.getCategoryName(singleDomainCtrl.domainInfo.category_id)]])</small>
                <br/>
                <a ng-href="[[ singleDomainCtrl.domainInfo.url ]]">[[ singleDomainCtrl.domainInfo.url ]]</a>
            </div>

            <div class="col-md-2 text-right">
                <i class="fa fa-circle big-status" ng-class="singleDomainCtrl.domainRequest.statuscode == 200 ? 'status-ok' : 'status-error'"></i>
            </div>
        </div>

        <div class="seperator"></div>

        <div class="row apps-server" ng-if="singleDomainCtrl.appsFoundServer.length > 0">
            <div class="col-md-12">
                <h4>Server</h4>
                <div class="col-md-2 text-center" ng-repeat="appDetected in singleDomainCtrl.appsFoundServer track by $index">
                    <img ng-src="/assets/img/apps/[[ appDetected.icon ]]" alt="" height="16" width="16" />
                    <br/>
                    [[ appDetected.name ]]
                    <br/>
                    <small ng-if="appDetected.version != -1">([[ appDetected.version ]])</small>
                </div>
            </div>
        </div>

        <div class="row apps-body" ng-if="singleDomainCtrl.appsFound.length > 0">
            <div class="col-md-12">
                <h4>Externals</h4>
                <div class="col-md-2 text-center" ng-repeat="appDetected in singleDomainCtrl.appsFound track by $index">
                    <img ng-src="/assets/img/apps/[[ appDetected.icon ]]" alt="" height="16" width="16" />
                    <br/>
                    [[ appDetected.name ]]
                    <br/>
                    <small ng-if="appDetected.version != -1">([[ appDetected.version ]])</small>
                </div>
            </div>
        </div>

        <div class="seperator" ng-if="singleDomainCtrl.appsFound.length > 0 || singleDomainCtrl.appsFoundServer.length > 0"></div>

        <div class="row air-bottom-md">
            <div class="col-md-12">
                <h4>Notes</h4>
                <div class="domain-notes" contenteditable ng-model="singleDomainCtrl.domainInfo.notes" ng-if="singleDomainCtrl.editableNotes"></div>
                <div>
                    <p ng-bind-html="singleDomainCtrl.domainInfo.notes" ng-if="!singleDomainCtrl.editableNotes && singleDomainCtrl.domainInfo.notes"></p>
                    <button class="btn default" ng-click="singleDomainCtrl.editNotes()" ng-if="!singleDomainCtrl.editableNotes"><i class="fa fa-edit"></i> Edit notes</button>
                    <button class="btn default" ng-if="singleDomainCtrl.editableNotes" ng-click="singleDomainCtrl.cancelEditNotes()">Cancel</button>
                    <button class="btn default" ng-if="singleDomainCtrl.editableNotes" ng-click="singleDomainCtrl.submitNotes()">Save</button>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <h4>Expiration date</h4>
                <p ng-if="singleDomainCtrl.domainInfo.expiration">[[ singleDomainCtrl.domainInfo.expiration * 1000 | date:'dd/MM/yyyy' ]]</p>
                <button class="btn default" ng-click="singleDomainCtrl.editableExpiration = true" ng-if="!singleDomainCtrl.editableExpiration"><i class="fa fa-plus"></i> Edit expiration date</button>
                <input class="form-control" type="date" min="2015-01-01" ng-model="singleDomainCtrl.newExpiration" ng-if="singleDomainCtrl.editableExpiration" />
                <button class="btn default" ng-if="singleDomainCtrl.editableExpiration" ng-click="singleDomainCtrl.cancelEditExpiration()">Cancel</button>
                <button class="btn default" ng-if="singleDomainCtrl.editableExpiration" ng-click="singleDomainCtrl.submitExpiration()">Save</button>
            </div>
        </div>
    </div>

@endsection