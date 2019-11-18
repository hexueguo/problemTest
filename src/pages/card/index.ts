import { ViewController, obx } from '@ali/recore';
import { Grid, Box } from '@alifd/layout';
import {
  PageHeader,
  Card,
  Button,
} from '@ali/deep';

export default class PageView extends ViewController {
  static components = {
    PageHeader,
    Card,
    Button,
    Grid,
    Box,
  };
}
