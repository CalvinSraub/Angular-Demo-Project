import { WidgetComponent } from '@fil-im/dashboards';
import { Type } from '@angular/core';

/**
 * This is the central file where all widgets must be registered.
 *
 * Looking for a better solution!
 */
export const WidgetRegister: { [widgetComponentId: string]: Type<WidgetComponent> } = {};
