export class ApiRequest {
  protected async get<T>(path: string): Promise<T> {
    const response = await this.fetch(path, { method: 'GET' })
    return response as T
  }

  protected async fetch<T>(path: string, options: RequestInit): Promise<T> {
    const url = process.env.domain + path
    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error()
    }

    return response.json()
  }
}
