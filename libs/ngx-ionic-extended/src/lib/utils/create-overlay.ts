import { OverlayController } from '@ionic/core';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

type PromiseType<T> = T extends Promise<infer R> ? R : never;

export function createOverlay<
  T extends OverlayController,
  Opt = Parameters<T['create']>[0]
>(overlayController: T, options?: Opt) {
  return new Observable<PromiseType<ReturnType<T['create']>>>((observer) => {
    const overlay$ = from(overlayController.create(options));
    overlay$.subscribe((overlay: any) => observer.next(overlay));
    return () =>
      overlay$.pipe(switchMap((overlay: any) => overlay.dismiss())).subscribe();
  });
}
