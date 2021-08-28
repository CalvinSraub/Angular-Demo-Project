
import { Type } from '@angular/core';
import { BlankSource, WidgetSource } from '@fil-im/dashboards';

/**
 * This is the central file where all widget sources must be registered.
 *
 * Looking for a better solution!
 */
export const SourceRegister: { [sourceId: string]: Type<WidgetSource> } = { ['BLANK_SOURCE']: BlankSource };
