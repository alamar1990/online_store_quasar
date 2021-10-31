class ProductService {
  constructor(dbInstance) {
    this.collectionName = 'product'
    this.dbInstance = dbInstance

    dbInstance.collection(this.collectionName)
  }

  // CRUD METHODS
  async all() {
    try {
      return this.dbInstance.collection(this.collectionName).get({keys: true})
    } catch (e) {
      throw e
    }
  }

  async view(condition) {
    try {
      return this.dbInstance.collection(this.collectionName).doc(condition).get({keys: true})
    } catch (e) {
      throw e
    }
  }

  async create(payload) {
    try {
      return await this.dbInstance.collection(this.collectionName).add(payload)
    } catch (e) {
      throw e
    }
  }

  async update(condition, payload) {
    try {
      return await this.dbInstance.collection(this.collectionName).doc(condition).set(payload)
    } catch (e) {
      throw e
    }
  }

  async remove(condition) {
    try {
      return await this.dbInstance.collection(this.collectionName).doc(condition).delete()
    } catch (e) {
      throw e
    }
  }
}

module.exports.ProductService = ProductService;
