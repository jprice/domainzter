@extends('layouts.master')

@section('content')
    <div class="panel-standard" ng-controller="DomainController as domainCtrl">
        <h3>Categories</h3>
        <span class="sub-title" ng-if="domainCtrl.categories.length > 0">[[ domainCtrl.categories.length ]] categories currently added</span>
        <span class="sub-title" ng-if="domainCtrl.categories.length == 0">No categories added yet</span>

        <div class="right-actions pull-right">
            <a href="#category-add" data-toggle="modal"><button class="btn default"><i class="fa fa-plus"></i> Add category</button></a>
        </div>

        <table class="table table-standard" ng-if="domainCtrl.categories.length > 0">
            <thead>
                <tr>
                    <th class="header-sort" ng-click="orderValue = 'name'; reverse=!reverse">Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr ng-repeat="category in domainCtrl.categories | orderBy:orderValue:reverse track by category.id">
                    <td ng-bind="::category.name"></td>
                    <td>
                        <a href="#category-delete-[[ category.id ]]" data-toggle="modal"><button class="btn btn-xs btn-danger"><i class="fa fa-close"></i></button></a>
                        @include('components.modals.category-delete')
                    </td>
                </tr>
            </tbody>
        </table>
    @include('components.modals.category-add')
    </div>

@endsection