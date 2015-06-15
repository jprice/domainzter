<div class="modal fade" id="category-delete-[[ category.id ]]">
    <div class="modal-dialog">
        <div class="modal-content">
            <form role="form" method="post" action="[[ '{{ route('categories.destroy', ['id' => null]) }}/'+ category.id ]]">
                <div class="modal-header text-center">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Are you sure you want to delete <strong>[[ category.name ]]</strong>?</h4>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default btn-theme" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-danger btn-theme">Delete category</button>
                </div>
            </form>
        </div>
    </div>
</div>