/** @format */

export function QueryException( obj ) {
	this.msg = obj.msg;
	this.resetQuery = obj.resetQuery;
	this.params = obj.params;
}
