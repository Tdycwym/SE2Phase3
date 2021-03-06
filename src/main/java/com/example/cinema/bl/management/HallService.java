package com.example.cinema.bl.management;

import com.example.cinema.vo.HallForm;
import com.example.cinema.vo.ResponseVO;

/**
 * @author fjj
 * @date 2019/4/12 2:01 PM
 */
public interface HallService {
    /**
     * 影厅信息录入
     * @param hallForm
     * @return
     */
    ResponseVO addHall(HallForm hallForm);
    /**
     * 搜索所有影厅
     * @return
     */
    ResponseVO searchAllHall();

    /**
     * 修改影厅信息
     * @param hallForm
     * @return
     */
    ResponseVO updateHall(HallForm hallForm);
}
