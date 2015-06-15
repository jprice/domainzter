<div class="modal fade" id="domain-edit-[[ domain.id ]]">
    <div class="modal-dialog">
        <div class="modal-content">
            <form role="form" method="post" action="{{ route('domains.update', ['id' => 1]) }}">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Edit <strong>[[ domain.title ]]</strong></h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="title">Name</label>
                                <input type="text" class="form-control" id="title" name="title" value="[[ domain.title ]]">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="url_for_[[ domain.id ]]">Domain (URL)</label>
                                <input type="text" class="form-control" id="url_for_[[ domain.id ]]" name="url" value="[[ domain.url ]]" onblur="checkUrlPrefix(this.id, this.value)">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="category_id">Category</label>
                        <select class="form-control" id="category_id" name="category_id">
                            <option value="">None</option>
                            <option ng-repeat="category in domainCtrl.categories" value="[[ category.id ]]" ng-selected="domain.category_id == category.id">[[ category.name]]</option>
                        </select>
                    </div>
                    <div class="white-space-10"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default btn-theme" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-success btn-theme">Edit domain</button>
                </div>
            </form>
        </div>
    </div>
</div>