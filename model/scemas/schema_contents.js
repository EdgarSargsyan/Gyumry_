const db = require('../db');
const mongoosePaginate = require('mongoose-paginate');


const Schemas = new db.Schema({
  menu: {
    menu_item_en: {
      type: Object,
      charset: "UTF8"
    },
    menu_item_ru: {
      type: Object,
      charset: "UTF8"
    },
    menu_item_hy: {
      type: Object,
      charset: "UTF8"
    }
  },
  category: {
    categories_en: {
      categories_item1: {
        categories_item_name: {
          type: String
        },
        categories_item_state: {
          type: Object,
          charset: "UTF8"
        }
      },
      categories_item2: {
        categories_item_name: {
          type: String
        },
        categories_item_state: {
          type: Object,
          charset: "UTF8"
        }
      },
      categories_item3: {
        categories_item_name: {
          type: String
        },
        categories_item_state: {
          type: Object,
          charset: "UTF8"
        }
      },
      categories_item4: {
        categories_item_name: {
          type: String
        },
        categories_item_state: {
          type: Object,
          charset: "UTF8"
        }
      },
      categories_item5: {
        categories_item_name: {
          type: String
        },
        categories_item_state: {
          type: Object,
          charset: "UTF8"
        }
      },
      categories_item6: {
        categories_item_name: {
          type: String
        },
        categories_item_state: {
          type: Object,
          charset: "UTF8"
        }
      }
    },
    categories_ru: {
      categories_item1: {
        categories_item_name: {
          type: String
        },
        categories_item_state: {
          type: Object,
          charset: "UTF8"
        }
      },
      categories_item2: {
        categories_item_name: {
          type: String
        },
        categories_item_state: {
          type: Object,
          charset: "UTF8"
        }
      },
      categories_item3: {
        categories_item_name: {
          type: String
        },
        categories_item_state: {
          type: Object,
          charset: "UTF8"
        }
      },
      categories_item4: {
        categories_item_name: {
          type: String
        },
        categories_item_state: {
          type: Object,
          charset: "UTF8"
        }
      },
      categories_item5: {
        categories_item_name: {
          type: String
        },
        categories_item_state: {
          type: Object,
          charset: "UTF8"
        }
      },
      categories_item6: {
        categories_item_name: {
          type: String
        },
        categories_item_state: {
          type: Object,
          charset: "UTF8"
        }
      }
    },
    categories_hy: {
      categories_item1: {
        categories_item_name: {
          type: String
        },
        categories_item_state: {
          type: Object,
          charset: "UTF8"
        }
      },
      categories_item2: {
        categories_item_name: {
          type: String
        },
        categories_item_state: {
          type: Object,
          charset: "UTF8"
        }
      },
      categories_item3: {
        categories_item_name: {
          type: String
        },
        categories_item_state: {
          type: Object,
          charset: "UTF8"
        }
      },
      categories_item4: {
        categories_item_name: {
          type: String
        },
        categories_item_state: {
          type: Object,
          charset: "UTF8"
        }
      },
      categories_item5: {
        categories_item_name: {
          type: String
        },
        categories_item_state: {
          type: Object,
          charset: "UTF8"
        }
      },
      categories_item6: {
        categories_item_name: {
          type: String
        },
        categories_item_state: {
          type: Object,
          charset: "UTF8"
        }
      }
    }
  }
});

Schemas.plugin(mongoosePaginate);
const Schema = db.model('content', Schemas);



module.exports = Schema;