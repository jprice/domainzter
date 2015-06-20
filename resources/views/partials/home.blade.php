@extends('layouts.master')

@section('content')
    <div class="panel-standard" ng-controller="DomainController as domainCtrl">
        <h3>Domains</h3>
        <span class="sub-title" ng-if="domainCtrl.domains.length > 0">[[ domainCtrl.domains.length ]] domain(s) currently added</span>
        <span class="sub-title" ng-if="domainCtrl.domains.length == 0">No domains added yet</span>

        <div class="right-actions pull-right">
            <a href="#domain-add" data-toggle="modal"><button class="btn default"><i class="fa fa-plus"></i> Add domain</button></a>
        </div>

        <table class="table table-standard" ng-if="domainCtrl.domains.length > 0">
            <thead>
                <tr>
                    <th class="header-sort" ng-click="orderValue = 'title'; reverse=!reverse">Name</th>
                    <th class="header-sort" ng-click="orderValue = 'url'; reverse=!reverse">Domain</th>
                    <th class="header-sort" ng-click="orderValue = 'category_id'; reverse=!reverse">Category</th>
                    <th class="header-sort" ng-click="orderValue = 'active'; reverse=!reverse">Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="domain in domainCtrl.domains | orderBy:orderValue:reverse track by domain.id">
                    <td ng-bind="::domain.title"></td>
                    <td ng-bind="::domain.url"></td>
                    <td ng-bind="domainCtrl.getCategoryName(domain.category_id) || 'None'"></td>
                    <td class="td-status">
                        <i class="fa fa-circle" ng-class="domain.active ? 'status-ok' : 'status-error'"></i>
                        <i ng-if="domain.closeExpiration" class="fa fa-warning status-unknown"></i>
                    </td>
                    <td>
                        <a href="[[ '{{ route('domains.show', ['id' => null]) }}/'+ domain.id ]]"><button class="btn btn-xs btn-info"><i class="fa fa-eye"></i></button></a>
                        <a href="#domain-delete-[[ domain.id ]]" data-toggle="modal"><button class="btn btn-xs btn-danger"><i class="fa fa-close"></i></button></a>
                        @include('components.modals.domain-delete')
                        <a href="#domain-edit-[[ domain.id ]]" data-toggle="modal"><button class="btn btn-xs btn-info"><i class="fa fa-pencil"></i></button></a>
                        @include('components.modals.domain-edit')
                    </td>
                </tr>
            </tbody>
        </table>
    @include('components.modals.domain-add')
    </div>

@endsection