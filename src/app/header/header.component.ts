import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  // Direction = Direction;
  // Theme = Theme;

  // @Input()
  // currentTheme: Theme;

  // @Input()
  // direction: Direction;

  // @Input()
  // showPageTitle: boolean;

  // @Input()
  // pageTitle: string;

  // @Input()
  // isSuperAdminUser: boolean;

  // @Input()
  // userName: string;

  // @Output()
  // themeChange = new EventEmitter<Theme>();

  // @Output()
  // directionChange = new EventEmitter<Direction>();

  // @Output()
  // logout = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  // onThemeChange(theme: Theme) {
  //   this.themeChange.emit(theme);
  // }

  // onDirectionChange(direction: Direction) {
  //   this.directionChange.emit(direction);
  // }

  // onChangePassword() {}

  // onLogout() {
  //   this.logout.emit();
  // }
}
