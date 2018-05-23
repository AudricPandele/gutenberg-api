/**
 * Folder.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
        type: 'string',
        required: true,
    },
    slug: {
        type: 'string',
        required: true,
    },
    owner: {
        model: 'user',
    },
    is_public: {
        type: 'boolean',
        required: true,
    },
    created_at: {
        type: 'string',
        required: true,
    },
    articles: {
      collection: 'article',
      via: 'folder'
    },
    contributors: {
      collection: 'user',
      via: 'folders'
    },
  }
};