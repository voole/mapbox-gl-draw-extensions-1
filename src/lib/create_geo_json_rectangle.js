export default function (start, end) {
    let rectangle_coordinates = [];

    const one_point = [start[0], start[1]];
    const two_point = [start[0], end[1]];
    const three_point = [end[0], end[1]];
    const four_point = [end[0], start[1]];

    // const lt_point = [];
    // const lb_point = [];
    // const rt_point = [];
    // const rb_point = [];

    // const lt_x = start[0] <= end[0] ? start[0] : end[0];
    // const lt_y = start[1] <= end[1] ? start[1] : end[1];

    // const rb_x = start[0] >= end[0] ? start[0] : end[0];
    // const rb_y = start[1] >= end[1] ? start[1] : end[1];

    // const rt_x = rb_x;
    // const rt_y = lt_y;

    // const lb_x = lt_x;
    // const lb_y = rb_y;

    // lt_point.push(lt_x, lt_y);
    // lb_point.push(lb_x, lb_y);
    // rt_point.push(rt_x, rt_y);
    // rb_point.push(rb_x, rb_y);
    //绘制顺序 左下 => 左上 => 右上 => 右下 => 左下
    // rectangle_coordinates = [].concat([lb_point, lt_point, rt_point, rb_point, lb_point]);
    // rectangle_coordinates = [].concat([lt_point, lb_point, rb_point, rt_point, lt_point]);
    rectangle_coordinates = [].concat([one_point, two_point, three_point, four_point, one_point]);
    return rectangle_coordinates;
}