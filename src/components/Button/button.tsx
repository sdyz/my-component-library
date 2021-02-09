import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import classNames from 'classnames'

// 演示代码
// export enum ButtonSize {
//   Large = 'lg',
//   Small = 'sm'
// }
export type ButtonSize = 'lg' | 'sm'

export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}
// ButtonHTMLAttributes 是button所有原生属性类型
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
// a 链接原生属性
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
// TS Utility Types : Partial 属性可选，并不是都有的
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 * 
 * ~~~js
 * import { Button } from 'vikingship'
 * ~~~
 */
export const Button: FC<ButtonProps> = (props) => {
  const {
    btnType,
    className, // 用户自定义className
    disabled,
    size,
    children,
    href,
    ...restProps //  包含了其他的所有原生属性
  } = props;

  // 配置 classNames ： btn, btn-lg, btn-primary
  // disable说明：button 默认支持disabled属性；但 a链接disable属性就要通过样式来控制了，所以添加到classname里
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })

  // button 包括 link类型和其他类型
  if (btnType === 'link' && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button;