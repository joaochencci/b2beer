/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {
		
		name: {
			required: true,
			type: "string"
		},

		email: {
			required: true,
			unique: true,
			type: "email"
		},

		password: {

			required: true,
			type: "string",
			min: 6
		}
	}
};
