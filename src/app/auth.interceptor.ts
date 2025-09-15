import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize, tap, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { inject } from '@angular/core';
import { NotificationService } from './services/notification.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
	const notifier = inject(NotificationService);
	const token = localStorage.getItem('token');
	const requestWithAuth = token
		? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
		: req;

	const startedAt = performance.now();
	return next(requestWithAuth).pipe(
		tap(() => {
			// sucesso silencioso
		}),
		catchError((err: unknown) => {
			const duration = Math.round(performance.now() - startedAt);
			if (err instanceof HttpErrorResponse) {
				if (!environment.production) {
					console.error(`[HTTP ${err.status}] ${req.method} ${req.url} - ${duration}ms`, err.error);
				}
				const msg = err.error?.message || err.message || 'Erro de comunicação com o servidor.';
				notifier.showError(msg);
			}
			return throwError(() => err);
		}),
		finalize(() => {
			// poderia registrar métricas de duração aqui se necessário
		})
	);
};


