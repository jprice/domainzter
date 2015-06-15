<div class="modal fade" id="domain-add">
    <div class="modal-dialog">
        <div class="modal-content">
            <form role="form" method="POST" action="{{ route('domains.store') }}">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Add new domain</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="title">Name</label>
                                <input type="text" class="form-control" id="title" name="title">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="new_url">Domain (URL)</label>
                                <input type="text" class="form-control" id="new_url" name="url" onblur="checkUrlPrefix(this.id, this.value)">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="category">Category</label>
                                <select class="form-control" id="category_id" name="category_id">
                                    <option value="">None</option>
                                    <option ng-repeat="category in domainCtrl.categories" value="[[ category.id ]]">[[ category.name]]</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="new_category">or add new category</label>
                                <input type="text" class="form-control" id="new_category" name="new_category">
                            </div>
                        </div>
                    </div>
                    <div class="white-space-10"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default btn-theme" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-success btn-theme">Add domain</button>
                </div>
            </form>
        </div>
    </div>
</div>