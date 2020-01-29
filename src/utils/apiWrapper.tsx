class API {
  masterUrl: string;

  constructor(url: string) {
    this.masterUrl = url
  }

  async getClusterInfo() {
    const response = await fetch(this.masterUrl + '/cluster_info', {
      method: 'GET',
    })

    return await response.json()
  }
}

export default API