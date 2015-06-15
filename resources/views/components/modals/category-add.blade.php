<div class="modal fade" id="category-add">
    <div class="modal-dialog">
        <div class="modal-content">
            <form role="form" method="POST" action="{{ route('categories.store') }}">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Add new category</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" name="name">
                            </div>
                        </div>
                    </div>
                    <div class="white-space-10"></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default btn-theme" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-success btn-theme">Add category</button>
                </div>
            </form>
        </div>
    </div>
</div>