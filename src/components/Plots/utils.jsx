import all_hpos from "../../assets/data/all_hpos.json";
import compare_fig from "../../assets/data/compare_fig.json";
import first_hpos from "../../assets/data/first_hpos.json";
import heatmap_all_complaints_subgroups from "../../assets/data/heatmap_all_complaints_subgroups.json";
import heatmap_iuis_b_ip_count_s_cols from "../../assets/data/heatmap_iuis_b_ip_count_s_cols.json";
import heatmap_iuis_b_ip_percent_s_cols from "../../assets/data/heatmap_iuis_b_ip_percent_s_cols.json";
import heatmap_iuis_basic_ip_count_s_cols from "../../assets/data/heatmap_iuis_basic_ip_count_s_cols.json";
import heatmap_iuis_basic_ip_percent_s_cols from "../../assets/data/heatmap_iuis_basic_ip_percent_s_cols.json";
import heatmap_iuis_hmg_s_cols from "../../assets/data/heatmap_iuis_hmg_s_cols.json";
import heatmap_iuis_ig_s_cols from "../../assets/data/heatmap_iuis_ig_s_cols.json";
import heatmap_iuis_t_ip_count_s_cols from "../../assets/data/heatmap_iuis_t_ip_count_s_cols.json";
import heatmap_iuis_t_ip_percent_s_cols from "../../assets/data/heatmap_iuis_t_ip_percent_s_cols.json";
import heatmap_iuis_t2_ip_percent_s_cols from "../../assets/data/heatmap_iuis_t2_ip_percent_s_cols.json";
import heatmap_ple_b_ip_percent_s_cols from "../../assets/data/heatmap_ple_b_ip_percent_s_cols.json";
import heatmap_ple_basic_ip_percent_s_cols from "../../assets/data/heatmap_ple_basic_ip_percent_s_cols.json";
import heatmap_ple_hmg_s_cols from "../../assets/data/heatmap_ple_hmg_s_cols.json";
import heatmap_ple_ig_s_cols from "../../assets/data/heatmap_ple_ig_s_cols.json";
import heatmap_ple_t_ip_percent_s_cols from "../../assets/data/heatmap_ple_t_ip_percent_s_cols.json";
import heatmap_ple_t2_ip_percent_s_cols from "../../assets/data/heatmap_ple_t2_ip_percent_s_cols.json";
import hist from "../../assets/data/hist.json";
import sankey from "../../assets/data/sankey.json";
import tree from "../../assets/data/tree.json";
import violin from "../../assets/data/violin.json";
import violin2 from "../../assets/data/violin2.json";
import violin3 from "../../assets/data/violin3.json";
import violin4 from "../../assets/data/violin4.json";
import violin5 from "../../assets/data/violin5.json";

const plot_data_list = [
  ["Şekil 8:", sankey],
  ["Şekil 9:", violin],
  ["Şekil 10:", violin2],
  ["Şekil 11:", violin3],
  ["Şekil 12:", violin4],
  ["Şekil 13:", violin5],
  ["Şekil 14:", heatmap_iuis_ig_s_cols],
  ["Şekil 15:", heatmap_iuis_hmg_s_cols],
  ["Şekil 16:", heatmap_iuis_basic_ip_percent_s_cols],
  ["Şekil 17:", heatmap_iuis_basic_ip_count_s_cols],
  ["Şekil 18:", heatmap_iuis_b_ip_percent_s_cols],
  ["Şekil 19:", heatmap_iuis_b_ip_count_s_cols],
  ["Şekil 20:", heatmap_iuis_t_ip_percent_s_cols],
  ["Şekil 21:", heatmap_iuis_t_ip_count_s_cols],
  ["Şekil 22:", heatmap_iuis_t2_ip_percent_s_cols],
  ["Şekil 23:", heatmap_ple_ig_s_cols],
  ["Şekil 24:", heatmap_ple_hmg_s_cols],
  ["Şekil 25:", heatmap_ple_basic_ip_percent_s_cols],
  ["Şekil 26:", heatmap_ple_b_ip_percent_s_cols],
  ["Şekil 27:", heatmap_ple_t_ip_percent_s_cols],
  ["Şekil 28:", heatmap_ple_t2_ip_percent_s_cols],
  ["Şekil 29:", first_hpos],
  ["Şekil 30:", all_hpos],
  ["Şekil 31:", hist],
  ["Şekil 32:", compare_fig],
  ["Şekil 33:", tree],
  ["Şekil 34:", heatmap_all_complaints_subgroups]
];

export default plot_data_list;
