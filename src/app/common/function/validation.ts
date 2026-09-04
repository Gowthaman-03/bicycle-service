import { Type } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormArray } from '@angular/forms';

export function getErrorMessages(errors: { [key: string]: any } | null, name?: string): string[] {
  const temp: string[] = [];
  const Title = name || 'Field';
  if (!errors) {
    return temp;
  }

  if (errors['required']) {
    temp.push(`${Title} is required.`);
  }
  if (errors['minlength']) {
    temp.push(
      `${Title} has to be at least ${errors['minlength'].requiredLength} characters long. Current Length: ${errors['minlength'].actualLength}`,
    );
  }
  if (errors['maxlength']) {
    temp.push(
      `${Title} can't be longer than ${errors['maxlength'].requiredLength} characters. Current Length: ${errors['maxlength'].actualLength}`,
    );
  }
  if (errors['min']) {
    temp.push(`${Title} can't be less than ${errors['min'].min}`);
  }
  if (errors['max']) {
    temp.push(`${Title} can't be greater than ${errors['max'].max}`);
  }

  if (errors['pattern']) {
    temp.push(`${Title} doesn't match the required pattern.`);
    const patternResult = errors['pattern'];
  }
  return temp;
}

export function markAllControlsAsDirty(abstractControls: AbstractControl[]): void {
  abstractControls.forEach((abstractControl) => {
    if (abstractControl instanceof FormControl) {
      (abstractControl as FormControl).markAsDirty({ onlySelf: true });
    } else if (abstractControl instanceof FormGroup) {
      markAllControlsAsDirty(Object.values((abstractControl as FormGroup).controls));
    } else if (abstractControl instanceof FormArray) {
      markAllControlsAsDirty((abstractControl as FormArray).controls);
    }
  });
}

export function formatDateObject(data: any) {
  if (data) {
    Object.keys(data).forEach((key) => {
      if (
        key.toLowerCase().includes('date') ||
        key.toLowerCase().includes('createdat') ||
        key.toLowerCase().includes('editedat')
      ) {
        data[key] = data[key] ? new Date(data[key]) : null;
      }
    });
  }
  return data;
}
