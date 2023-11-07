import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, map } from 'rxjs';
import { MovieService } from 'src/app/shared/services/movies.service';

export class TitleValidator {
  static createValidator(movieService: MovieService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return movieService
        .checkIfTitleExists(control.value)
        .pipe(map((result) => (result ? { titleAlreadyExists: true } : null)));
    };
  }
}
