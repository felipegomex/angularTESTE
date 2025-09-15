import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class NotificationService {
	constructor(private snackBar: MatSnackBar) {}

	showError(message: string): void {
		this.snackBar.open(message, 'Fechar', {
			duration: 6000,
			panelClass: ['snackbar-error'],
			horizontalPosition: 'right',
			verticalPosition: 'top',
		});
	}

	showSuccess(message: string): void {
		this.snackBar.open(message, 'Fechar', {
			duration: 3000,
			panelClass: ['snackbar-success'],
			horizontalPosition: 'right',
			verticalPosition: 'top',
		});
	}
}


