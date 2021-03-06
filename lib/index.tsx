import * as React from 'react';
import {CSSProperties} from 'react';
import 'stylesheets/reset.scss';

declare global {
  interface GuuiFunctionComponent<P = {}> extends React.FunctionComponent<P> {
    // 强制要求 displayName
    displayName: string;
    // 由于 propTypes 与 TypeScript + 函数式组件配合起来有 bug
    // 所以我不得不覆盖掉 propTypes 了
    // 奇怪的是，propTypes 与 TypeScript + class组件配合得很好
    // 我测试发现 class 组件的 propTypes 属性根本就没有被 TypeScript 检查！
    // 见 https://stackoverflow.com/questions/53672656/typescript-does-not-check-a-react-components-proptypes-how-could-i-fix-it/53675443
    propTypes?: any;
  }

  interface IStyledProps {
    className?: string;
    style?: CSSProperties;
  }

  type GFC<P = {}> = GuuiFunctionComponent<P>;

  type ClassValue = string | string[] | { [k: string]: any } | undefined | false | null;
}

export {default as Button} from './button/button';
export {default as Input} from './input/input';
export {default as Icon} from './icon/icon';
export {Layout, Footer, Aside, Main, Header} from './layout/index';
export {Col, Row} from './grid/index';

export {default as Check} from './check/check';

export {default as Radio} from './radio/radio';

export {default as Breadcrumb, IBreadcrumbItem, BI, Renderer} from './breadcrumb/breadcrumb';

export {default as Datepicker} from './datepicker/datepicker';

export {default as Table} from './table/table';
export {TableColumn} from './table/table';
export {TableDataSourceItem} from './table/table';

export {default as Pager} from './pager/pager';

export {default as List} from './list/list';

export {default as ClickOutside} from './clickOutside/clickOutside';

export {default as Scroll} from './scroll/scroll';

export {default as Vmenu} from './vmenu/vmenu';

export {default as City} from './city/city';

export {default as Dialog} from './dialog/dialog';
export {alert, confirm, modal} from './dialog/dialog';

export {default as Slides} from './slides/slides';

export {default as Form} from './form/form';
