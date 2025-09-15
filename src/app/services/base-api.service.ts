import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class BaseApiService {
	protected readonly baseUrl = environment.apiBaseUrl;

	constructor(protected http: HttpClient) {}

	protected get<T>(path: string, params?: HttpParams | Record<string, string | number | boolean>): Observable<T> {
		const options = this.buildOptions(params);
		return this.http.get<T>(`${this.baseUrl}${path}`, options);
	}

	protected post<T>(path: string, body: unknown): Observable<T> {
		return this.http.post<T>(`${this.baseUrl}${path}`, body);
	}

	protected put<T>(path: string, body: unknown): Observable<T> {
		return this.http.put<T>(`${this.baseUrl}${path}`, body);
	}

	protected delete<T>(path: string): Observable<T> {
		return this.http.delete<T>(`${this.baseUrl}${path}`);
	}

	private buildOptions(params?: HttpParams | Record<string, string | number | boolean>) {
		if (!params) return {};
		if (params instanceof HttpParams) return { params };
		const httpParams = new HttpParams({ fromObject: Object.entries(params).reduce((acc, [k, v]) => ({ ...acc, [k]: String(v) }), {}) });
		return { params: httpParams };
	}
}


